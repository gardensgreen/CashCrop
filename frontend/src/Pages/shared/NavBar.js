import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div class="nav">
            <div class="nav-bar">
                <NavLink class="nav-link" to="/">
                    CashCrop
                </NavLink>
                <div class="nav-links">
                    <NavLink class="nav-link" to="/budget">
                        Budget
                    </NavLink>
                    <NavLink class="nav-link" to="/spending">
                        Spending
                    </NavLink>
                    <NavLink class="nav-link" to="/spending">
                        Account
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
