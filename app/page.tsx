import { PrismaClient } from "@prisma/client";

interface dogs {
  id: number;
  dog_name: string;
  owner_name: string;
  breed: string;
}

export default async function Home() {
  const prisma = new PrismaClient();
  const data = await prisma.dogs.findMany();
  return (
    <>
      <div className="flex items-center justify-center mx-auto">
        <div className="flex-col">
          <h1 className="p-2 text-2xl ">โรงแรมหมา</h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border rounded-md">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b-2">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">ชื่อหมา</th>
                <th className="px-6 py-3">ชื่อเจ้าของ</th>
                <th className="px-6 py-3">สายพันธุ์</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dog: dogs, index: number) => (
                <tr key={index} className=" border-b-2">
                  <th className="px-6 py-3">{dog.id}</th>
                  <td className="px-6 py-3">{dog.dog_name}</td>
                  <td className="px-6 py-3">{dog.owner_name}</td>
                  <td className="px-6 py-3">{dog.breed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
