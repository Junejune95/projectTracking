export interface TableFilter {
    page: number;
    limit: number;
    search?: string;
    sortColumn: string;
    sortDirection: 'desc' | 'asc';
    totalCount?:number;
  }
  