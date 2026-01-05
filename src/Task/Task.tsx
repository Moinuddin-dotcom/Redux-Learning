import TaskCard from '@/modules/task/TaskCard'
import { TaskDialog } from '@/modules/task/TaskDialog'
import { selectTasks } from '@/redux/featurs/task/taskSlice'
import { useAppSelector } from '@/redux/hook'

export default function Task() {
  const tasks = useAppSelector(selectTasks)

  return (
    <div>
      <div className='flex justify-between items-center gap-2'>
        <h1>Tasks</h1>
        <div>
          <TaskDialog />
        </div>
      </div>
      {tasks.map(task => <TaskCard key={task.id} task={task} />)}

    </div>
  )
}
