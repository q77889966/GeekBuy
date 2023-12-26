package com.second.hand.trading.server.model;

public class GeekStartModel {
    public GeekStartModel() {

    }
    private Long userId;
    private Double budget;
    private String contact;
    private String otherRequirements;
    public GeekStartModel(Long userId, Double budget, String contact, String otherRequirements) {
        this.userId = userId;
        this.budget = budget;
        this.contact = contact;
        this.otherRequirements = otherRequirements;
    }
    // Getters
    public Long getUserId() {
        return userId;
    }

    public Double getBudget() {
        return budget;
    }

    public String getContact() {
        return contact;
    }

    public String getOtherRequirements() {
        return otherRequirements;
    }

    // Setters
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setBudget(Double budget) {
        this.budget = budget;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setOtherRequirements(String otherRequirements) {
        this.otherRequirements = otherRequirements;
    }


    @Override
    public String toString() {
        return "GeekStartRequest{" +
                "userId=" + userId +
                ", budget=" + budget +
                ", contact='" + contact + '\'' +
                ", otherRequirements='" + otherRequirements + '\'' +
                '}';
    }
}
