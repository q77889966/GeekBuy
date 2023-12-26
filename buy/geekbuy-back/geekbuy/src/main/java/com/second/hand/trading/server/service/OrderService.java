package com.second.hand.trading.server.service;

import com.second.hand.trading.server.model.OrderModel;
import com.second.hand.trading.server.vo.PageVo;

import java.util.List;

public interface OrderService {


    boolean addOrder(OrderModel orderModel);


    OrderModel getOrder(Long id);


    boolean updateOrder(OrderModel orderModel);


    List<OrderModel> getMyOrder(Long userId);


    List<OrderModel> getMySoldIdle(Long userId);

    PageVo<OrderModel> getAllOrder(int page, int nums);

    boolean deleteOrder(long id);
}
