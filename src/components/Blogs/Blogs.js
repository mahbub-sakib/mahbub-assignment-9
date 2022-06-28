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
                <h1>Q1: What is context API?</h1>
                <p>Context API হল একটি রিঅ্যাক্ট স্ট্রাকচার যা আপনাকে unique বৈশিষ্ট্য আদান-প্রদান করতে সক্ষম করে এবং অ্যাপ্লিকেশনের সমস্ত স্তর থেকে প্রপ-ড্রিলিং সমাধানে সহায়তা করে।</p>

            </div>

        </div>
    );
};

export default Blogs;