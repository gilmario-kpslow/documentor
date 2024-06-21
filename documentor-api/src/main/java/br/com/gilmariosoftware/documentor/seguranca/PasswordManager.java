package br.com.gilmariosoftware.documentor.seguranca;

import at.favre.lib.crypto.bcrypt.BCrypt;
import jakarta.enterprise.context.Dependent;

/**
 *
 * @author gilmario
 */
@Dependent
public class PasswordManager {

    private static final int COST = 12;

    public String encript(String password) {
        return BCrypt.withDefaults().hashToString(COST, password.toCharArray());
    }

    public boolean match(String password, String storedPassword) {
        BCrypt.Result rewsult = BCrypt.verifyer().verify(password.toCharArray(), storedPassword);
        return rewsult.verified;
    }

}
