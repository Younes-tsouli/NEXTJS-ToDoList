import { FaCalendarPlus } from "react-icons/fa6";

const AddTask = () => {
    return (
    <div>
        <button className="task btn w-full btn-primary">ADD TASK
            <FaCalendarPlus className="ml-2" />
        </button>
    </div>
    );
}
export default AddTask;