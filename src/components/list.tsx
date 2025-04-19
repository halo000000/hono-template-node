import { jsx } from 'hono/jsx';

const List = () => {
  const list = ["this is made with hono", "tailwind CSS", "zod for validation", "drizzle", "JSX"];
  return (
    <div>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Awesome Tech Stack
        </h1>
        <ul className="space-y-4">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex items-center bg-gray-50 rounded-md shadow-sm p-3"
            >
              <span className="inline-block w-6 h-6 rounded-full bg-indigo-500 text-white text-center font-semibold mr-3">
                {index + 1}
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-gray-500 text-center">
          Built with passion and modern technologies.
        </p>
      </div>
    </div>
  );
};

export default List;