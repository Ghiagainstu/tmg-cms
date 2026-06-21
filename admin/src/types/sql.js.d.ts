declare module "sql.js" {
  interface QueryExecResult {
    columns: string[];
    values: unknown[][];
  }

  class Database {
    constructor(data?: ArrayLike<number> | Buffer | null);
    run(sql: string, params?: unknown[]): Database;
    exec(sql: string, params?: unknown[]): QueryExecResult[];
    export(): Uint8Array;
    close(): void;
  }

  interface SqlJsStatic {
    Database: typeof Database;
  }

  interface SqlJsInit {
    (config?: { locateFile?: (filename: string) => string }): Promise<SqlJsStatic>;
  }

  const initSqlJs: SqlJsInit;
  export default initSqlJs;
  export { Database, SqlJsStatic, QueryExecResult };
}
