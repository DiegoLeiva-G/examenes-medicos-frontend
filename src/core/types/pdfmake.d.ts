declare module 'pdfmake/build/vfs_fonts' {
  const pdfMake: {
    vfs: Record<string, string>;
  };
  export { pdfMake };
}