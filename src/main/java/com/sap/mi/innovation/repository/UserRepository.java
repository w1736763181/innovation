package com.sap.mi.innovation.repository;


import com.sap.mi.innovation.model.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by I309891 on 1/6/2016.
 */
@Repository
public interface UserRepository extends JpaRepository<UsersEntity, Integer> {

}
