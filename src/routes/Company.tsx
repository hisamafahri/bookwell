import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Chevron from '../assets/icon/Chevron'
import { Accept, Reject, Waiting } from '../assets/icon/Status'
import EventCard from '../components/EventCard'
import PlusIcon from '../assets/icon/PlusIcon'
import FloatingActionButton from '../components/FloatingActionButton'

function Company() {
    return (
        <div>
            <NavBar text='Google, LLC' />
            <Header text='Google' />
            <div className='mt-9'>
                <EventCard eventName='Wellness Day 2021' eventVendor='Event Vendor Name' statusIcon={ <Accept /> }  />
                <EventCard eventName='Another Wellness Event' eventVendor='Another Event Vendor' statusIcon={ <Waiting /> }  />
                <EventCard eventName='Wellness Week' eventVendor='Event Vendor' statusIcon={ <Reject /> }  />
                <EventCard eventName='Wellness Day 2021' eventVendor='Event Vendor Name' statusIcon={ <Accept /> }  />
                <EventCard eventName='Another Wellness Event' eventVendor='Another Event Vendor' statusIcon={ <Waiting /> }  />
                <EventCard eventName='Wellness Week' eventVendor='Event Vendor' statusIcon={ <Reject /> }  />
                <EventCard eventName='Wellness Day 2021' eventVendor='Event Vendor Name' statusIcon={ <Accept /> }  />
                <EventCard eventName='Another Wellness Event' eventVendor='Another Event Vendor' statusIcon={ <Waiting /> }  />
                <EventCard eventName='Wellness Week' eventVendor='Event Vendor' statusIcon={ <Reject /> }  />
            </div>
            <FloatingActionButton />
        </div>
    )
}

export default Company
