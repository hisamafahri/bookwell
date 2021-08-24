import React, { useState } from 'react'
import { Accept, Reject, Waiting } from '../assets/icon/Status'
import AcceptModal from '../components/AcceptModal'
import DetailsModal from '../components/DetailsModal'
import EventVendorCard from '../components/EventVendorCard'
import FilterModal from '../components/FilterModal'
import Header from '../components/Header'
import ListHeader from '../components/ListHeader'
import NavBar from '../components/NavBar'
import RejectModal from '../components/RejectModal'




function Vendor() {
    const [filterModal, setFilterModal] = useState('hidden')
    const [detailsModal, setDetailsModal] = useState('hidden')
    const [acceptModal, setAcceptModal] = useState('hidden')
    const [rejectModal, setRejectModal] = useState('hidden')
    return (
        <div>
            <AcceptModal style={acceptModal} onClick={() => setAcceptModal('hidden')} />
            <RejectModal style={rejectModal} onClick={() => setRejectModal('hidden')} />
            <DetailsModal
                style={detailsModal}
                onClick={() => setDetailsModal('hidden')}
                onAcceptClick={() => {
                    setDetailsModal('hidden')
                    setAcceptModal('')
                }}
                onRejectClick={() => {
                    setDetailsModal('hidden')
                    setRejectModal('')
                }}
            />
            <FilterModal style={filterModal} onClick={() => setFilterModal('hidden')} />
            <NavBar text='Vendor Name' />
            <Header text='Vendor Name' onClick={() => setFilterModal('')} />
            <ListHeader name='Company name' />
            <div className='mt-9 md:mt-0 grid items-center justify-center'>
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Day 2021' companyName='Company Name!' statusIcon={<Accept />} />
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Day 2021' companyName='Company Name!' statusIcon={<Accept />} />
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Another Wellness Event ka asdjh sdkjashd ' companyName='Another Company' statusIcon={<Waiting />} />
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Week' companyName='Company' statusIcon={<Reject />} />
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Day 2021' companyName='Company Name' statusIcon={<Accept />} />
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Another Wellness Event' companyName='Another Company' statusIcon={<Waiting />} />
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Week' companyName='Company' statusIcon={<Reject />} />
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Day 2021' companyName='Company Name' statusIcon={<Accept />} />
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Another Wellness Event' companyName='Another Company' statusIcon={<Waiting />} />
                <EventVendorCard onClick={() => setDetailsModal('')} dateCreated='26 Aug 2021' eventName='Wellness Week' companyName='Company' statusIcon={<Reject />} />
            </div>
            <div className='h-24'></div>
        </div>
    )
}

export default Vendor
