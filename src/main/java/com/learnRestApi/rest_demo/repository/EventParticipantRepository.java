package com.learnRestApi.rest_demo.repository;
import com.learnRestApi.rest_demo.model.EventParticipant;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface  EventParticipantRepository extends JpaRepository <EventParticipant, String>  {
   // Optional<EventParticipant> findByName(String participantName);
    List<EventParticipant> findByEventName(String eventName);
//    List<EventParticipant> delee(String eventName);

    @Modifying
    @Transactional
    @Query("DELETE FROM EventParticipant e WHERE e.eventName = :eventName")
    void deleteByEventName(@Param("eventName") String eventName);
}
