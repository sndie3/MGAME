'use client'
import React from 'react'

/**
 * Card Component 
 * @file -  Card.tsx
 * @description - This is a Card component that can be used to display content in a card format.
 * 
 * **CardProps** - contains the properties that can be passed to the Card component.
 *  @props 
 * 
 */

interface CardProps {
    name: string;
}


const Card: React.FC<CardProps> = (
    { name }
) => {
    return(
        <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-4 p-8 bg-white rounded-lg shadow-md dark:bg-black">
            {name}
        </div>
    )
}

export default Card 