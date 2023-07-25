import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <div>
      <table
        style={{
          border: "1px solid rgb(200, 200, 200)",
          margin: "0 auto",
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
