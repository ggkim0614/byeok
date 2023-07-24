export const List = ({ list, users }) => {
  return (
    <div align="center">
      <table
        style={{
          border: "1px solid rgb(200, 200, 200)",
        }}
      >
        <thead>
          <tr>
            <th>Project name</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {list.map((project) => (
            <tr key={project.id}>
              <td
                style={{
                  border: "1px solid rgb(180, 180, 180)",
                  backgroundColor: "rgb(230, 230, 230)",
                }}
              >
                {project.name}
              </td>
              <td
                style={{
                  border: "1px solid rgb(180, 180, 180)",
                  backgroundColor: "rgb(230, 230, 230)",
                }}
              >
                {users.find((user) => user.id === project.personId)?.name ||
                  "Unknown"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
