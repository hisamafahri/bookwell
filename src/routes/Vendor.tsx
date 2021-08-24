import React, { useState } from 'react'
import { Accept, Reject, Waiting } from '../assets/icon/Status'
import EventVendorCard from '../components/EventVendorCard'
import FilterModal from '../components/FilterModal'
import Header from '../components/Header'
import ListHeader from '../components/ListHeader'
import NavBar from '../components/NavBar'



function Vendor() {
    const [filterModal, setFilterModal] = useState('hidden')
    const [eventModal, setEventModal] = useState('hidden')
    return (
        <div>
            <FilterModal style={ filterModal } onClick={() => setFilterModal('hidden')} />
            <NavBar text='Vendor Name' />
            <Header text='Vendor Name' onClick={() => setFilterModal('')} />
            <ListHeader name='Company name' />
            <div className='mt-9 md:mt-0 grid items-center justify-center'>
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Wellness Day 2021' companyName='Company Name!' statusIcon={ <Accept /> }  />
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Wellness Day 2021' companyName='Company Name!' statusIcon={ <Accept /> }  />
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Another Wellness Event ka asdjh sdkjashd ' companyName='Another Company' statusIcon={ <Waiting /> }  />
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Wellness Week' companyName='Company' statusIcon={ <Reject /> }  />
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Wellness Day 2021' companyName='Company Name' statusIcon={ <Accept /> }  />
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Another Wellness Event' companyName='Another Company' statusIcon={ <Waiting /> }  />
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Wellness Week' companyName='Company' statusIcon={ <Reject /> }  />
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Wellness Day 2021' companyName='Company Name' statusIcon={ <Accept /> }  />
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Another Wellness Event' companyName='Another Company' statusIcon={ <Waiting /> }  />
                <EventVendorCard dateCreated='26 Aug 2021' eventName='Wellness Week' companyName='Company' statusIcon={ <Reject /> }  />
            </div>
            <div className='h-24'></div>
        </div>
    )
}

export default Vendor
