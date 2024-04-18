export type dummyDataTypes = {
  date: string;
  time: string;
  reportName: string;
  fileId: string;
};

export const dummyData: dummyDataTypes[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    date: `2023-01-0${i + 1}`,
    time: `12:0${i + 1} PM`,
    reportName: `API URL USAGE REPORT ${i + 1}.csv`,
    fileId: `file-${i + 1}`,
  })),
];
