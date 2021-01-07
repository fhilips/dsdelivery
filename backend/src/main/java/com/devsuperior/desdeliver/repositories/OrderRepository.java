package com.devsuperior.desdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.desdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
