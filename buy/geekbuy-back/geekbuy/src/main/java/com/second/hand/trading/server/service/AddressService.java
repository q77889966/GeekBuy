package com.second.hand.trading.server.service;

import com.second.hand.trading.server.model.AddressModel;

import java.util.List;

public interface AddressService {

    List<AddressModel> getAddressByUser(Long userId);


    AddressModel getAddressById(Long id,Long userId);


    boolean addAddress(AddressModel addressModel);


    boolean updateAddress(AddressModel addressModel);


    boolean deleteAddress(AddressModel addressModel);
}
