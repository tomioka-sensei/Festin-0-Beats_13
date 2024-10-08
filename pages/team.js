/* eslint-disable */



import Head from 'next/head';
import { useState } from 'react';
import TeamPage from '@/components/Team';
import Heading from '@/components/Heading';
import localFont from 'next/font/local';
import { Anton } from 'next/font/google';

const pricedown = localFont({
    src: './../assets/fonts/pricedown.ttf',
});

const anton = Anton({
    subsets: ['latin-ext'],
    weight: ['400'],
})

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Student Co-ordinators');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <Head>
                <title>Festin-O-Beats| Team</title>
            </Head>
            <div className='md:mt-24'>
                <div className={`mx-auto text-white md:w-11/12 ${pricedown.className} flex flex-row`}>
                    <Heading>Meet the Team</Heading>
                    
                </div>

                <div className="w-2/3 mx-auto mt-6 mb-3">
                    <div className="flex flex-col md:flex-row items-center mb-2 justify-center md:justify-evenly">
                        <div
                            className={`border-transparent cursor-pointer pt-2 pb-1 px-1 border-b-2 font-medium text-xl ${activeTab === 'Student Co-ordinators' ? ' border-michael-blue text-michael-blue ' : 'text-gray-400 hover:text-gray-500 hover:border-gray-400'
                                }`}
                            onClick={() => handleTabClick('Student Co-ordinators')}
                        >
                            Student Co-ordinators
                        </div>
                        <div
                            className={`border-transparent cursor-pointer pt-2 pb-1 px-1 border-b-2 font-medium text-xl ${activeTab === 'Organisers' ? ' border-michael-blue text-michael-blue ' : 'text-gray-400 hover:text-gray-500 hover:border-gray-400'
                                }`}
                            onClick={() => handleTabClick('Organisers')}
                        >
                            Organisers
                        </div>
                    </div>
                    <div className="mt-2">
                        {activeTab === 'Student Co-ordinators' && <TeamPage />}
                        {activeTab === 'Organisers' && (


                          
                            <div className="w-full mx-auto flex flex-col items-center gap-6">


                               <div className='bg-gray-900 mx-auto rounded-md my-3 w-full py-3'>
                                    <p className={`text-3xl text-center font-bold text-trevor-orange`}>Chief Patron</p>
                                    <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                        <h2 className="text-xl font-bold text-franklin-green">Sh. Ashu Goel</h2>
                                        <p className="text-sm text-michael-blue">Chairman, ABESIT, Ghaziabad</p>
                                    </div>
                                </div>

                                     <div className='bg-gray-900 mx-auto rounded-md my-3 w-full py-3'>
                                    <p className={`text-3xl text-center font-bold text-trevor-orange`}>Patron</p>
                                    <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                        <h2 className="text-xl font-bold text-franklin-green">Prof. (Dr.) M. K. Jha</h2>
                                        <p className="text-sm text-michael-blue">Director</p>
                                    </div>
                                </div>
                                <div className='bg-gray-900 mx-auto rounded-md my-3 w-full py-3'>
                                    <p className={`text-3xl text-center font-bold text-trevor-orange`}>Mentor</p>
                                    <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                        <h2 className="text-xl font-bold text-franklin-green">Prof. (Dr.) Subodh Kumar Sharma</h2>
                                        <p className="text-sm text-michael-blue">Dean Student Welfare</p>
                                    </div>
                                </div>
                                <div className='bg-gray-900 mx-auto rounded-md my-3 w-full py-3'>
                                    <p className={`text-3xl text-center font-bold text-trevor-orange`}>Convener</p>
                                    <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                        <h2 className="text-xl font-bold text-franklin-green">Dr. Aakansha Garg</h2>
                                        <p className="text-sm text-michael-blue">Assistant Professor - AS&H</p>
                                    </div>
                                </div>
                                <div className='bg-gray-900 w-full mx-auto rounded-md my-3 py-3'>
                                    <p className={`text-3xl text-center font-bold text-trevor-orange`}>Core Committee</p>
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Dr. Mitul Sarkar</h2>
                                            <p className="text-sm text-michael-blue">Associate Professor - AS&H</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Dr. Neeti Srivastav</h2>
                                            <p className="text-sm text-michael-blue">Associate Professor - Pharmacy</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Dr. Nisha Singh</h2>
                                            <p className="text-sm text-michael-blue">Associate Professor - AS&H</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Prof. Kaushal Gupta</h2>
                                            <p className="text-sm text-michael-blue">Associate Professor - AS&H</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Prof. Neetu Narang Mahajan</h2>
                                            <p className="text-sm text-michael-blue">Assistant Professor - MCA</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 w-full text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Prof. Arjun Singh</h2>
                                            <p className="text-sm text-michael-blue">Assistant Professor - Pharmacy</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-900 w-full mx-auto rounded-md my-3 py-3'>
                                    <p className={`text-3xl text-center font-bold text-trevor-orange`}>Cultural Event Coordinator</p>
                                    <div className='flex flex-wrap justify-center items-center gap-4'>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Dr. Neeti Srivastav</h2>
                                            <p className="text-sm text-michael-blue">Associate Professor - Pharmacy</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Dr. Dolly Sharma</h2>
                                            <p className="text-sm text-michael-blue">Associate Professor - AS&H</p>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                                      <div className='bg-gray-900 w-full mx-auto rounded-md my-3 py-3'>
                                    <p className={`text-3xl text-center font-bold text-trevor-orange`}>Fine Arts & Photography Event Coordinator</p>
                                    <div className='flex flex-wrap justify-center items-center gap-4'>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 text-center transition ease-in-out duration-200">
                                        <h2 className="text-xl font-bold text-franklin-green">Dr. Nisha Singh</h2>
                                        <p className="text-sm text-michael-blue">Associate Professor - AS&H</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 text-center transition ease-in-out duration-200">
                                        <h2 className="text-xl font-bold text-franklin-green">Dr. Anjali Saxena</h2>
                                        <p className="text-sm text-michael-blue">Associate Professor - AS&H</p>
                                        </div>
                                       
                                    </div>
                                </div>


                                
                                <div className='bg-gray-900 w-full mx-auto rounded-md my-3 py-3'>
                                    <p className={`text-3xl text-center font-bold text-trevor-orange`}>Technical Event Coordinator</p>
                                    <div className='flex flex-wrap justify-center items-center gap-4'>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Mr. Avdhesh Kumar Tiwari</h2>
                                            <p className="text-sm text-michael-blue">Assistant Professor - CSE</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Ms. Meena Kumari</h2>
                                            <p className="text-sm text-michael-blue">Assistant Professor - CSE(IoT)</p>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className='bg-gray-900 w-full mx-auto rounded-md my-3 py-3'>
                                    <p className={`text-3xl text-center font-bold text-trevor-orange`}>Literary Event Coordinator</p>
                                    <div className='flex flex-wrap justify-center items-center gap-4'>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Dr. Kanika Taneja</h2>
                                            <p className="text-sm text-michael-blue">Professor - CSE(DS)</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-around p-1 md:p-3 rounded-lg m-1 text-center transition ease-in-out duration-200">
                                            <h2 className="text-xl font-bold text-franklin-green">Dr. Rajeev Rajput</h2>
                                            <p className="text-sm text-michael-blue">Assistant Professor - AS&H</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                          


                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Tabs
