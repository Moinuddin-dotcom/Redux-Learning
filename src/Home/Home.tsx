import { Button } from '@/components/ui/button'
import { decrement, increment } from '@/redux/featurs/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'

export default function Home() {
    const dispatch = useAppDispatch()
    const { count } = useAppSelector((state) => state.counter)
    const handleIncrement = (amount: number) => {
        dispatch(increment(amount))
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div className='pt-20 '>
            <div className='flex justify-center items-center gap-5'>
                <Button onClick={handleDecrement}>Decrement</Button>
                <p>Count: {count}</p>
                <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
                <Button onClick={() => handleIncrement(1)}>Increment by 1</Button>
            </div>
        </div>
    )
}
