import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import { Accept, Reject, Waiting } from '../assets/icon/Status'
import EventCard from '../components/EventCard'
import FloatingActionButton from '../components/FloatingActionButton'
import ListHeader from '../components/ListHeader'
import FilterModal from '../components/FilterModal'
import NewEventModal from '../components/NewEventModal'
import DetailsCompanyModal from '../components/DetailsCompanyModal'


function Company() {
    const [filterModal, setFilterModal] = useState('hidden')
    const [eventModal, setEventModal] = useState('hidden')
    const [detailsModal, setDetailsModal] = useState('hidden')
    return (
        <div>
            <DetailsCompanyModal style={detailsModal} onClick={() => setDetailsModal('hidden')} />
            <NewEventModal style={ eventModal } onClick={() => setEventModal('hidden')} />
            <FilterModal style={ filterModal } onClick={() => setFilterModal('hidden')} />
            <NavBar text='Google, LLC' />
            <Header text='Google' onClick={() => setFilterModal('')} />
            <ListHeader name='Vendor name' />
            <div className='mt-9 md:mt-0 grid items-center justify-center'>
                <EventCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Day 2021' eventVendor='Event Vendor Name!' statusIcon={ <Accept /> }  />
                <EventCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Another Wellness Event ka asdjh sdkjashd ' eventVendor='Another Event Vendor' statusIcon={ <Waiting /> }  />
                <EventCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Week' eventVendor='Event Vendor' statusIcon={ <Reject /> }  />
                <EventCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Day 2021' eventVendor='Event Vendor Name' statusIcon={ <Accept /> }  />
                <EventCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Another Wellness Event' eventVendor='Another Event Vendor' statusIcon={ <Waiting /> }  />
                <EventCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Week' eventVendor='Event Vendor' statusIcon={ <Reject /> }  />
                <EventCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Day 2021' eventVendor='Event Vendor Name' statusIcon={ <Accept /> }  />
                <EventCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Another Wellness Event' eventVendor='Another Event Vendor' statusIcon={ <Waiting /> }  />
                <EventCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Week' eventVendor='Event Vendor' statusIcon={ <Reject /> }  />
            </div>
            <div className='h-24'></div>
            <FloatingActionButton onClick={() => setEventModal('')} />
        </div>
    )
}

export default Company
