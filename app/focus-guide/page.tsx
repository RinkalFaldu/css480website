import Navbar from '../components/Navbar';
import '../../styles/globals.css';
import Image from 'next/image';

export default function FocusGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-pink-50">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-5 px-6 py-10">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-pink-700 text-center mb-2 drop-shadow-lg">
          My Top 3 Hobbies
        </h1>
        <p className="text-xl text-gray-700 text-center mb-8 mt-4">
          Discover the three hobbies that bring joy, inspiration, and fulfillment to my life. 
        </p>

        {/* Box 1: Traveling */}
        <section className=" w-full flex flex-col md:flex-row items-center mb-10 rounded-3xl shadow-xl  p-6 md:p-10" style={{ backgroundColor: '#FBE4D6' }}>
          <div className="flex-1 md:pr-8">
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Traveling</h2>
            <p className="text-lg text-gray-700 mb-4">
              Exploring new destinations, immersing in different cultures, and creating unforgettable memories is what makes traveling so special to me. Each journey brings new perspectives and experiences that shape who I am.
            </p>
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Why I love it</h3>
            <ul className="list-disc text-gray-700 mb-2 pl-6">
              <li>It creates unforgettable memories.</li>
              <li>Local street food tours are my favorite way to explore a new city</li>
              <li>Photography while traveling helps me capture memories</li>
              <li>Meeting locals and learning about their way of life is always enlightening</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <Image
              src="/traveling.jpg"
              alt="mount rainier"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Box 2: Cooking */}
        <section className="w-full flex flex-col md:flex-row-reverse items-center mb-10 rounded-3xl shadow-xl bg-green-100 p-6 md:p-10">
          <div className="flex-1 md:pl-8">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Cooking</h2>
            <p className="text-lg text-gray-700 mb-4">
              The art of transforming ingredients into delicious meals is both therapeutic and rewarding. Cooking allows me to be creative, experiment with flavors, and share love through food with friends and family.
            </p>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Why I love it</h3>
            <ul className="list-disc text-gray-700 mb-2 pl-6">
              <li>Indian cuisines are my specialties</li>
              <li>I like to watch food recipe videos</li>
              <li>Homemade pasta is my signature dish</li>
              <li>I like when someone praise my cooked food</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <Image
              src="/cooking.jpg"
              alt="Fresh ingredients and cooking utensils on a kitchen counter"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Box 3: Watching Movies */}
        <section className="w-full flex flex-col md:flex-row items-center mb-10 rounded-3xl shadow-xl bg-blue-100 p-6 md:p-10">
          <div className="flex-1 md:pr-8">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Watching Movies</h2>
            <p className="text-lg text-gray-700 mb-4">
              Cinema is a window into countless worlds and stories. I'm passionate about films that challenge perspectives, evoke emotions, and showcase brilliant storytelling. From classics to contemporary masterpieces, movies are my escape and inspiration.
            </p>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Why I love it</h3>
            <ul className="list-disc text-gray-700 mb-2 pl-6">
              <li>I like to watch suspense thriller movies</li>
              <li>I like to watch Hindi movies </li>
              <li>I like to know about different movie's storie</li>
              <li>Discussing film analysis and cinematography brings me joy</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center mt-6 md:mt-0">
            <Image
              src="/watching-movies.jpg"
              alt="Watching movies"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}