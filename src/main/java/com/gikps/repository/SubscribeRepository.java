/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gikps.repository;

import com.gikps.domain.Subscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author angelis
 */

@Repository
public interface SubscribeRepository  extends JpaRepository<Subscribe, Long>{
    
}
