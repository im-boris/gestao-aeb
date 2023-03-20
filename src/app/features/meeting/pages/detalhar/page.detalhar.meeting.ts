import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetingService } from '../../meeting.service';
import { Location } from "@angular/common";
import { Local } from '../../models/local';

@Component({
    templateUrl: './page.detalhar.meeting.html',
    styleUrls: ['./page.detalhar.meeting.scss']
})
export class PageDetalharMeeting implements OnInit {

    idLocal: number = 0;
    local: Local | undefined;

    constructor(private service: MeetingService,
                private route: ActivatedRoute,
                public location: Location){}

    ngOnInit(): void {
        this.idLocal = this.route.snapshot.params["idLocal"];
        this.local = this.service.getLocalByID(this.idLocal);
    }

}