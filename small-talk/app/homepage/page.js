"use client"
import React from 'react';
import ThemeLayout from '@/app/components/ThemeLayout';
import FriendsList from '../components/friends/FriendsList';

export default function Homepage() {
    return (
        <ThemeLayout>
            <div className="flex flex-row">
                <ul className="m-8 w-full">
                    <li className="border-b border-gray-200 pb-2 mb-10">Home Page</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Bulletin Board</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">
                        <FriendsList  />
                    </li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Chatroom</li>
                </ul>
            </div>
        </ThemeLayout>
    );
}
