package com.learnRestApi.rest_demo.exception;

public class EventParticipantExceptionDataNotFound extends RuntimeException {
    public EventParticipantExceptionDataNotFound(String message) {
        super(message);
    }

    public EventParticipantExceptionDataNotFound(String message, Throwable cause) {
        super(message, cause);
    }

}
