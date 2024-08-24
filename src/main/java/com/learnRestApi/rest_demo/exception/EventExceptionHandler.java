package com.learnRestApi.rest_demo.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class EventExceptionHandler {
    @ExceptionHandler(value = {EventParticipantExceptionDataNotFound.class})

    public ResponseEntity<Object> handleEventNotFoundException
            (EventParticipantExceptionDataNotFound eventParticipantExceptionDataNotFound)
    {
        EventException eventException = new EventException (
                eventParticipantExceptionDataNotFound.getMessage(),
                eventParticipantExceptionDataNotFound.getCause(),
                HttpStatus.NOT_FOUND
        );

        return new ResponseEntity<>(eventException, HttpStatus.NOT_FOUND);
    }
}
