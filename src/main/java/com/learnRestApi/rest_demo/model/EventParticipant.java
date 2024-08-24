package com.learnRestApi.rest_demo.model;

//import io.swagger.annotations.ApiModel;
//import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table (name="participant_info")
//@ApiModel(description = "This table holds cloud vendor information.")
public class EventParticipant
{
    @Id
   // @ApiModelProperty(notes="This is a Cloud Vendor Id. It shall be unique.")
    private String eventDate;
    private String eventName;
    private String eventAddress;
    private String eventDesc;

    public EventParticipant() {
    }

    public EventParticipant(String participantId, String eventName, String eventAddress, String eventDesc) {
        this.eventDate = participantId;
        this.eventName = eventName;
        this.eventAddress = eventAddress;
        this.eventDesc = eventDesc;
    }

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventAddress() {
        return eventAddress;
    }

    public void setEventAddress(String eventAddress) {
        this.eventAddress = eventAddress;
    }

    public String getEventDesc() {
        return eventDesc;
    }

    public void setEventDesc(String eventDesc) {
        this.eventDesc = eventDesc;
    }
}