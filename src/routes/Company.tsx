import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { Accept, Reject, Waiting } from '../assets/icon/Status'
import EventCard from '../components/EventCard'
import FloatingActionButton from '../components/FloatingActionButton'
import ListHeader from '../components/ListHeader'
import FilterModal from '../components/FilterModal'

function Company() {
    return (
        <div>
            <FilterModal style='hidden' />
            <NavBar text='Google, LLC' />
            <Header text='Google' />
            <ListHeader name='Vendor name' />
            <div className='mt-9 md:mt-0 grid items-center justify-center'>
                <EventCard dateCreated='26 Aug 2021' eventName='Wellness Day 2021' eventVendor='Event Vendor Name!' statusIcon={ <Accept /> }  />
                <EventCard dateCreated='26 Aug 2021' eventName='Another Wellness Event ka asdjh sdkjashd ' eventVendor='Another Event Vendor' statusIcon={ <Waiting /> }  />
                <EventCard dateCreated='26 Aug 2021' eventName='Wellness Week' eventVendor='Event Vendor' statusIcon={ <Reject /> }  />
                <EventCard dateCreated='26 Aug 2021' eventName='Wellness Day 2021' eventVendor='Event Vendor Name' statusIcon={ <Accept /> }  />
                <EventCard dateCreated='26 Aug 2021' eventName='Another Wellness Event' eventVendor='Another Event Vendor' statusIcon={ <Waiting /> }  />
                <EventCard dateCreated='26 Aug 2021' eventName='Wellness Week' eventVendor='Event Vendor' statusIcon={ <Reject /> }  />
                <EventCard dateCreated='26 Aug 2021' eventName='Wellness Day 2021' eventVendor='Event Vendor Name' statusIcon={ <Accept /> }  />
                <EventCard dateCreated='26 Aug 2021' eventName='Another Wellness Event' eventVendor='Another Event Vendor' statusIcon={ <Waiting /> }  />
                <EventCard dateCreated='26 Aug 2021' eventName='Wellness Week' eventVendor='Event Vendor' statusIcon={ <Reject /> }  />
            </div>
            <div className='h-24'></div>
            <FloatingActionButton />
        </div>
    )
}

export default Company
