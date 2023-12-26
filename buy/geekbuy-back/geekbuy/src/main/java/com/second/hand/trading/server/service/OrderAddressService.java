package com.second.hand.trading.server.service;

import com.second.hand.trading.server.model.OrderAddressModel;

public interface OrderAddressService {


    boolean addOrderAddress(OrderAddressModel orderAddressModel);


    boolean updateOrderAddress(OrderAddressModel orderAddressModel);


    OrderAddressModel getOrderAddress(Long orderId);
}
