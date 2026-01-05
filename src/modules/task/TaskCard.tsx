import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import type { ITask } from '@/type'
import { Trash } from 'lucide-react'

interface TaksProps {
    task: ITask
}

export default function TaskCard({ task }: TaksProps) {
    // console.log("Tasks", tasks)
    return (
        <>
           
            <div className='max-w-7xl mx-auto p-5 border border-white rounded-lg shadow-md my-5'>
                <div className='flex justify-between gap-4'>
                    <div className='w-full px-5 py-2'>
                        <h1 className={cn('text-xl', {
                            'text-red-700': task.priority === 'High',
                            'text-green-600': task.priority === 'Medium',
                            'text-blue-950': task.priority === 'Low'
                        })}>{task.title}</h1>
                        <h4>{task.description}</h4>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <Button className='bg-red-950 text-white'>
                            <Trash size={10} />
                        </Button>
                        <Button className='bg-green-600 hover:bg-green-600 text-white flex justify-center items-center gap-1'>
                            Check <Checkbox />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
