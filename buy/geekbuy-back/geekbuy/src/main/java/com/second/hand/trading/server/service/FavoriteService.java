package com.second.hand.trading.server.service;

import com.second.hand.trading.server.model.FavoriteModel;

import java.util.List;

public interface FavoriteService {

    boolean addFavorite(FavoriteModel favoriteModel);


    boolean deleteFavorite(Long id);


    Integer isFavorite(Long userId,Long idleId);


    List<FavoriteModel> getAllFavorite(Long userId);
}
