import { BasketContext } from './Context';
import { StackNavigator } from './StackNavigator';

export default function App() {
  return (
    <BasketContext>
      <StackNavigator />
    </BasketContext>
  )
}