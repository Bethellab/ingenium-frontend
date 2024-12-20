import HomeTabs from './HomeTabs'

const Home = () => {
  return (
    <div className="lg:mx-28">
      <div className='space-y-2'>
        <p className="text-4xl font-bold">What to learn next</p>
        <p className="text-gray-600 text-xl">There's a skill for everyone</p>
      </div>

      <div>
        <HomeTabs />
      </div>
    </div>
  )
}

export default Home