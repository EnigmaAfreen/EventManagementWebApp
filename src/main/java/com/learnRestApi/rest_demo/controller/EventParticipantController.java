package com.learnRestApi.rest_demo.controller;

import com.learnRestApi.rest_demo.model.EventParticipant;
import com.learnRestApi.rest_demo.response.ResponseHandler;
import com.learnRestApi.rest_demo.service.EventParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/participants")
@CrossOrigin("*")
public class EventParticipantController {

   @Autowired
   private final EventParticipantService eventParticipantService;
    public EventParticipantController(EventParticipantService eventParticipantService) {
        this.eventParticipantService = eventParticipantService;
    }
    EventParticipant eventParticipant;
@GetMapping("{eventName}")
    public ResponseEntity<Object> getEventParticipantDetails(@PathVariable("eventName")  String eventName){
    return ResponseHandler.responseBuilder("Participants are given Here", HttpStatus.OK, eventParticipantService.getParticipant(eventName));

}

    @GetMapping("/getall")
    public List<EventParticipant> getAllEventParticipantDetails(){

        return eventParticipantService.getAllParticipant();
    }
@PostMapping
    public ResponseEntity<Object> createParticipantDetail(@RequestBody EventParticipant eventParticipant){

    eventParticipantService.createParticipant(eventParticipant);
     return ResponseHandler.responseBuilder("Participants are given Here", HttpStatus.OK, eventParticipantService.createParticipant(eventParticipant));
    }
@PutMapping
    public String updateParticipantDetail(@RequestBody EventParticipant eventParticipant){
    eventParticipantService.updateParticipant(eventParticipant);
    return ("Updated successfully");
    }
@DeleteMapping("{eventName}")
    public String deleteParticipantDetail(@PathVariable("eventName") String eventName){

    return eventParticipantService.deleteParticipant(eventName);
}
}
