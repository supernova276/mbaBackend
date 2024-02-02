const userTypes={
    CUSTOMER:"CUSTOMER",
    ADMIN:"ADMIN"
}
const userStatus={
    PENDING:"PENDING",
    BLOCKED:"BLOCKED",
    REJECTED:"REJECTED",
    APPROVED:"APPROVED"
}
const releaseStatus={
    RELEASED:"RELEASED",
    UNRELEASED:"UNRELEASED",
    BLCOKED:"BLOCKED"
}
const languages={
 HINDI:"HINDI",
 TAMIL:"TAMIL",
 ENGLISH:"ENGLISH"
}

const bookingStatus={
    inProgress:"IN_PROGRESS",
    completed:"COMPLETED",
    cancelled:"CANCELLED",
    expired:"EXPIRED",
    failed:"FAILED"
}
const paymentStatus = {
    pending:"PENDING",
    success:"SUCCESS",
    failed:"FAILED"
}

module.exports={
    userTypes,
    userStatus,
    releaseStatus,
    languages,
    bookingStatus,
    paymentStatus
}