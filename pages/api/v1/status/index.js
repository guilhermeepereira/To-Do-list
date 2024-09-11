import query from "../../../../infra/database";
const responseDbVersion = await query("SHOW server_version;");

const dbVersion = responseDbVersion.rows[0].server_version;

function api(request, response) {
  response.status(200).json({
    dependencies: {
      database: {
        version: parseFloat(dbVersion),
      },
    },
  });
}

export default api;
