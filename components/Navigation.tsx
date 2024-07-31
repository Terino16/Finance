"use client"

import React, { useState } from 'react'
import NavButton from './NavButton'
import { usePathname, useRouter } from 'next/navigation'
import { Sheet, SheetContent,SheetTrigger } from './ui/sheet'
import {useMedia} from "react-use"
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const routes=[
    {
        id:1,
        label:"Home",
        href:'/'
    },
    {
        id:2,
        label:"Overview",
        href:'/overview'
    },
    {
        id:3,
        label:"Accounts",
        href:'/accounts'
    },
    {
        id:4,
        label:"Transactions",
        href:'/transactions'
    },
    {
        id:5,
        label:"Settings",
        href:'/settings'
    },
]


const Navigation = () => {
    const [isOpen,SetIsOpen]=useState(false);
    const router=useRouter();
    const isMobile=useMedia("(max-width:1024px)",false);
    const pathname=usePathname();

    const onClick=(href:string)=>{
        router.push(href);
        SetIsOpen(false);
    }

    if(isMobile)
        return(
        <Sheet open={isOpen} onOpenChange={SetIsOpen}>
            <SheetTrigger>
                <Button
                variant={'outline'}
                size={'sm'}
                className={"font-normal bg-white/10 hover:bg-white/20 hover:text-white  border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"}
                >
                    <Menu className='h-4 w-4'/>
                </Button>
            </SheetTrigger>
            <SheetContent  side={'left'} className='px-2'>
                <nav className='flex flex-col gap-y-2 pt-6'>
                    {routes.map((route)=>
                        (<Button key={route.id}
                            variant={route.href===pathname?"secondary":"ghost"}
                            onClick={()=>{onClick(route.href)}}
                            className='w-full justify-start'
                        >
                            {route.label}
                        </Button>
                        )
                    )}
                </nav>
            </SheetContent>

        </Sheet>
    )
  return (
    <nav className='hidden lg:flex items-center gap-x-2'>
        {routes.map((route)=>{
            return(<NavButton 
                key={route.id}
                label={route.label}
                href={route.href}
                isActive={route.href===pathname}
                />)
        })}
    </nav>
  )
}

export default Navigation