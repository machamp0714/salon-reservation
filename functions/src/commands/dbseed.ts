import commander from 'commander';
import fs from 'fs';
import parse from 'csv-parse/lib/sync';

const uploadSeed = (seedFile: string) => {
  const buffer = fs.readFileSync(seedFile);
  const records = parse(buffer.toString(), {
    columns: true,
    delimiter: '\t',
    skip_empty_lines: true,
  });
  console.log(records);
};

commander.version('0.1.0').arguments('<seedFile>').action(uploadSeed);

commander.parse(process.argv);
