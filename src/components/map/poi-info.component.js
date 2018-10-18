import React from 'react'
import Button from '@material-ui/core/Button'
import moment from 'moment'
require('moment/locale/fr.js');
moment.locale('fr');

const PoiInfo = ({ info }) => {
    const isContribution = info.entourage_type === 'contribution'
	return (
		<div>
			<div>
                {info.title} | le { moment(info.created_at).format('DD MMMM YYYY')}
                <a
                    target="_new"
                    href={`${info.share_url}`}>
                    <Button>
					    { isContribution ? 'Participer': 'Aider' }
                    </Button>
                </a>			
            </div>
		</div>
	)
}

export default PoiInfo