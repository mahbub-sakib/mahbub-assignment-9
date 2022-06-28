import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container mt-5'>
                <h1>Q1: What is context API?</h1>
                <p>Context API হল একটি রিঅ্যাক্ট স্ট্রাকচার যা আপনাকে unique বৈশিষ্ট্য আদান-প্রদান করতে সক্ষম করে এবং অ্যাপ্লিকেশনের সমস্ত স্তর থেকে প্রপ-ড্রিলিং সমাধানে সহায়তা করে।</p>
                <p>ধরুন, কোন parent component থেকে তার কয়েক স্তর পরের কোন এক child component এ data পাঠানোর দরকার পড়লো। এই ক্ষেত্রে প্রতি adjacent child এ prop না পাঁঠিয়ে সরাসরি ওই parent component
                    থেকে data পাঠানোর যে পদ্ধতি, তার নাম ই হল Context API।
                </p>
                <p>Context API ব্যবহার করতে হলে createContext hook এর প্রয়োজন পরে। যে variable টি Context API হিসেবে ব্যবহার করতে হবে, তার প্রথম অক্ষর অবশ্যই uppercase হতে হবে এবং ওই variable টি যে
                    component এ declare করা হয়েছে, সেখানেই export করতে হবে। চাইলে ওই variable এর default value দেওয়া যাবে। যে variable টি Context API হিসেবে ব্যবহার করা হয় তার পরে .Provider যোগ করে
                    Context area define করতে হয়। স্বাভাবিক ট্যাগ যেভাবে আমরা declare করি ঠিক ঐভাবেই। Context এর attribute হিসেবে value ব্যবহার করা যায়, যার মধ্যে ওই জিনিস টা assign করতে হয় যা কিনা আপনি
                    কোন এক স্তরের child component এ ব্যবহার করতে চান। যে child component এ Context variable টি ব্যবহার করতে চান, সেখানে Context variable টা import করতে হবে এবং useContext hook ব্যবহার করে
                    Context variable টা শহজেই পাওয়া যাবে।
                </p>
            </div>
            <div className='container mt-5'>
                <h1>Q1: What is Semantic tag?</h1>
                <p>Semantic tag browser এবং developer উভয়ের কাছে কোন এক html section এর অর্থ স্পষ্টভাবে বর্ণনা করে। একটি website এর সাধারণ কিছু অংশ বেশির ভাগ ক্ষেত্রে থাকেই যেমন, header, nav, section, footer ইত্যাদি।
                    Semantic tag গুলো সার্চ ইঞ্জিন এবং অন্যান্য user ডিভাইসগুলিকে web page গুলির গুরুত্ব এবং context নির্ধারণ করতে সহায়তা করে। Semantic tag গুলো user experience এর মান উন্নয়ন করে। ট্যাগ দেখেই বুঝা যায় ওই কোড
                    এর অংশে কি বিষয়ে কাজ করা হয়েছে। Semantic tag হল HTML5 এর একটি feature। দৃষ্টি প্রতিবন্ধী ব্যবহারকারীরা স্ক্রিন রিডার দিয়ে সাইট অ্যাক্সেস করতে পারে যদি ওই সাইট এ Semantic tag ব্যবহার করা হয়। search engine এর
                    ranking এ আপনার সাইট আগের দিকে থাকবে যদি সঠিক ভাবে website এ Semantic tag ব্যবহার করা হয়। Semantic tag ব্যবহার করলে code maintain করতে সুবিধা হয় এবং বেশির ভাগ ক্ষেত্রে page loading faster হয়।
                </p>

            </div>

        </div>
    );
};

export default Blogs;