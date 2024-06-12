interface Pagination {
    limit: number;
    offset: number;
  }
  
  const normalizeResponse = (data: any) => {
    return {
      status: 'success',
      data,
    };
  };
  
  export { normalizeResponse };
  