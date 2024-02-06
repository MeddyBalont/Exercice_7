import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm'




function App() {
	return (
		<div>
			
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'></div>
			<Cart /> 
			<ShoppingList />
			<QuestionForm />
			<Footer />
		</div>
	)
}

export default App