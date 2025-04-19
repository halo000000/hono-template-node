import Layout from './layout.tsx';
import List from '../components/list.tsx';
const Page = (name: string) => {
    return (
        <Layout>
            <div>
                
                <p className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Hello, <span className="text-indigo-600">{name}</span>!
                </p>
                <List />

            </div>
        </Layout>
    )
}

export default Page;