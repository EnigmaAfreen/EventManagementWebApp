package com.learnRestApi.rest_demo.service;

import com.learnRestApi.rest_demo.model.EventParticipant;

import java.util.List;

public interface EventParticipantService {
    public EventParticipant createParticipant(EventParticipant eventParticipant);
    public String updateParticipant(EventParticipant eventParticipant);
    public String deleteParticipant(String eventName);
    public EventParticipant getParticipant(String eventName);
    public List<EventParticipant> getAllParticipant();

}
