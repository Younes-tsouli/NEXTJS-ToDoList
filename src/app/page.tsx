import AddTask from "@/app/componants/AddTask";

export default function Home() {
    return (
        <main className="max-w-4xl mx-auto mt-4">

            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">TO-DO List</h1>
                <AddTask/>
                <ToDoListFolder/>
            </div>

        </main>
    )
}