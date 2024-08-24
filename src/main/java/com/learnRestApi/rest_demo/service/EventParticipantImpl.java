package com.learnRestApi.rest_demo.service;

import com.learnRestApi.rest_demo.exception.EventParticipantExceptionDataNotFound;
import com.learnRestApi.rest_demo.model.EventParticipant;
import com.learnRestApi.rest_demo.repository.EventParticipantRepository;
import com.learnRestApi.rest_demo.response.ResponseHandler;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class EventParticipantImpl implements EventParticipantService{



    EventParticipantRepository eventParticipantRepository;
    public EventParticipantImpl(EventParticipantRepository eventParticipantRepository) {
        this.eventParticipantRepository = eventParticipantRepository;
    }


    @Override
    public EventParticipant createParticipant(EventParticipant eventParticipant) {

        return eventParticipantRepository.save(eventParticipant);
    }

    @Override
    public String updateParticipant(EventParticipant eventParticipant) {
        eventParticipantRepository.save(eventParticipant);
        return "success";
    }

    @Override
    @Transactional
    public String deleteParticipant(String eventName) {
        eventParticipantRepository.deleteByEventName(eventName);
        return "success";
    }

    @Override
    public EventParticipant getParticipant(String eventName) {


        if(eventParticipantRepository.findByEventName(eventName).isEmpty())
            throw new EventParticipantExceptionDataNotFound(" Cloud Vendor does not exist");
        return eventParticipantRepository.findByEventName(eventName).get(0);

    }

    @Override
    public List<EventParticipant> getAllParticipant() {

        return eventParticipantRepository.findAll();
    }
}
