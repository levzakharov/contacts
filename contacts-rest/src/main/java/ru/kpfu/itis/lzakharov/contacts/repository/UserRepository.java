package ru.kpfu.itis.lzakharov.contacts.repository;import org.springframework.data.repository.CrudRepository;import org.springframework.stereotype.Repository;import ru.kpfu.itis.lzakharov.contacts.model.User;@Repositorypublic interface UserRepository extends CrudRepository<User, String> {}