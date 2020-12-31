import commander from 'commander';
import fs from 'fs';
import parse from 'csv-parse/lib/sync';
import admin from 'firebase-admin';
import serviceAccount from '../salon-dev-service-account.json';

import { Reservation } from '../services/models/reservation';
import { collectionName } from '../services/constants';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
})

const db = admin.firestore();

const uploadSeed = async (collection: string, seedFile: string) => {
  const buffer = fs.readFileSync(seedFile);
  const records = parse(buffer.toString(), {
    columns: true,
    delimiter: '\t',
    skip_empty_lines: true,
  });
  const ref = db.collection(collection);

  switch (collection) {
    case collectionName.reservations: {
      const docs: Reservation[] =
        records.map((record: Reservation) => ({
          ...record,
          startDate: admin.firestore.Timestamp.fromDate(new Date(record.startDate as string)),
          endDate: admin.firestore.Timestamp.fromDate(new Date(record.endDate as string)),
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }));
      for await (const doc of docs) {
        await ref.add(doc)
      }

      return;
    }

    default: {
      throw new Error('invalid collection name.');
    }
  }
};

commander.version('0.1.0').arguments('<collection> <seedFile>').action(uploadSeed);

commander.parse(process.argv);
